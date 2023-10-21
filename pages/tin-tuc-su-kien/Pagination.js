import styles from "../../styles/Post.module.css"

const CustomPagination = ({ totalItems, pageSize, currentPage, onPageChange }) => {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    const totalPages = Math.ceil(totalItems / pageSize);

    const renderPaginationItems = () => {
        const items = [];

        for (let i = 1; i <= totalPages; i++) {
            const isActive = currentPage === i;

            items.push(
                <li
                    key={i}
                    className={`${styles['page-item']} ${isActive ? styles['page-item-active'] : ''}`}
                >
                    <a
                        className={styles['page-link']}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        return items;
    };

    return (
        <ul className={styles['pagination']}>
            {currentPage !== 1 && (
                <li className={styles['page-item']}>
                    <a
                        className={styles['page-link-button']}
                        onClick={() => handlePageChange(1)}
                    >
                        Trang đầu
                    </a>
                </li>
            )}
            {renderPaginationItems()}
            {currentPage !== totalPages && (
                <li className={styles['page-item']}>
                    <a
                        className={styles['page-link-button']}
                        onClick={() => handlePageChange(totalPages)}
                    >
                        Trang cuối
                    </a>
                </li>
            )}
        </ul>
    );
};

export default CustomPagination;
