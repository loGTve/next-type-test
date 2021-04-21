import Link from "next/link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
});


export default function Index() {
    const buttonStyle = useStyles();

    return (
        <Link href="/">
        <Button
            classes={{
                root: buttonStyle.root
            }}
        >
                index
            </Button>
        </Link>
    )
}