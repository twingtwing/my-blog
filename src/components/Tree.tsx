import { useState } from 'react';
import styles from './Tree.module.css'

/* 
    추후에 tree도 커스텀 되도록 변경
    계층형 자료로 변경 
*/

type Node = {
  id: string;
  name: string;
  order: number;
  children: Node[];
};

interface TreeProps {
    tree: Node[];
    onClick: (id : string) =>  void;
}

const FolderIcon = ({isOpen}: {isOpen: boolean}) => (
    <span className={styles.icon}>
        {
            !isOpen ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
                <path fill="currentColor" d="M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z"/>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                <path fill="currentColor" d="M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z"/>
            </svg>
        }
    </span>
);

const FileIcon = () => (
    <span className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
            <path fill="currentColor" d="M176 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-240-88 0c-39.8 0-72-32.2-72-72l0-88zM316.1 160L224 67.9 224 136c0 13.3 10.7 24 24 24l68.1 0zM0 64C0 28.7 28.7 0 64 0L197.5 0c17 0 33.3 6.7 45.3 18.7L365.3 141.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"/>
        </svg>
    </span>
);

const getFolders = (nodes: Node[]): string[] => {
    return nodes.flatMap(node => 
        node.children && node.children.length > 0 ? [node.id, ...getFolders(node.children)] : []
    )
}

const Tree = ({tree, onClick} : TreeProps) => {
    
    // details로는 애니메이션을 구현할 수 없기 때문에 useState로 변경
    const [openNodes, setOpenNodes] = useState<Set<string>>(
        () => new Set([
            'root',
            ...getFolders(tree)
        ])
    );

    const clickNode = (id: string) => {
        setOpenNodes(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    }

    const renderNode = (node: Node, hasChildren: boolean) => {
        const isOpen = openNodes.has(node.id);
        return (
            <div className={styles.node}>
                {hasChildren ? <FolderIcon isOpen={isOpen}/> : <FileIcon />} 
                <span
                    className={styles.label}
                    /* 
                        이때, 부모로부터의 이벤트 전파를 막기위해서 
                        preventDefault 대신 stopPropagation을 사용함
                    */
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(node.id)
                }}>
                    {node.name}
                </span>
            </div>
        )
    } 

    const recursiveNode = (node: Node, hasChildren: boolean) => {
        const isOpen = openNodes.has(node.id);
        return (
            hasChildren ?
            <div className={styles['item-inner']}>
                <button 
                    type='button'
                    aria-expanded={isOpen}
                    onClick={() => clickNode(node.id)}>
                    {renderNode(node, hasChildren)}
                </button> 
                <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
                    <ul>{recursiveTree(node.children)}</ul>
                </div>
            </div>
            :
            <div className={styles['item-inner']}>{renderNode(node, hasChildren)}</div>
        )
    }

    const recursiveTree = (nodes: Node[]) => {
        // 오름차순 정렬
        const sortedNode = [...nodes].sort((a,b) =>a.order - b.order); // 원본배열을 변형하지 않도록 얇은 복사
        return (
            sortedNode.map(node => (
                // HTML 표준에 맞게 <ul> 태그 안에는 항상 <li>만 위치하도록 통일
                <li key={node.id} className={styles.item} >
                    {recursiveNode(node, (node.children && node.children.length > 0))} 
                </li>
            ))
        )
    }

    return (
        <div className={styles.tree}>
            <ul className={styles.root}>
                {recursiveTree([{
                    id: "root",
                    name: "전체",
                    order: 1,
                    children: tree
                }])}
            </ul>
        </div>
    )
}

export default Tree;
