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

const Tree = ({tree, onClick} : TreeProps) => {

    const renderTree = (tree: Node[]) => {
        return (
            tree.map(node => (
                (node.children && node.children.length > 0) ? (
                    <details open key={node.id}>
                        <summary>{renderNode(node)}</summary>
                        <ul>{renderTree(node.children)}</ul>
                    </details>
                ) : (
                    <li key={node.id}>{renderNode(node)}</li>
                )
            ))
        )
    }

    const renderNode = (node: Node) => {
        return (
            <div className={styles.node}>
                {/* 
                    icon 트리 형태는 나중에
                */}
                <span className={styles.icon}>▶ </span>
                <span onClick={(e) => {
                    onClick(node.id)
                    e.preventDefault();
                }}>{node.name}</span>
            </div>
        )
    }

    return (
        <div className={styles.tree}>
            {renderTree([{
                id: "root",
                name: "전체",
                order: 1,
                children: tree
            }])}
        </div>
    )
}

export default Tree;
