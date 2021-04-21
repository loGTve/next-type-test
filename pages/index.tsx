import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { AppBar, Toolbar } from "@material-ui/core";

export default function Index() {
    return (
        <AppBar>
            <Toolbar>
                <Link href="/about">
                    <Button variant="contained" color="primary">
                        About
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
