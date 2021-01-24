import styles from "./pill.module.scss"


interface Props {
    children: any,
    color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
    className?: string,
}
export default function Pill(props: Props) {


    let type = styles.primary;

    switch (props.color) {
        default: // default to primary colors when no color has been given
        case "primary": {
            type = styles.primary + " dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:border";
            break;
        }
        case "secondary": {
            type = styles.secondary;
            break;
        }
        case "danger": {
            type = styles.danger
            break;
        }
        case "warning": {
            type = styles.warning;
            break;
        }
        case "success": {
            type = styles.success;
            break;
        }
        case "info": {
            type = styles.info;
            break;
        }

    }

    return (
        <div className={type + " " +  props.className}>
            {props.children}
        </div>
    )
}