import Link from 'next/link';
import {AppBar, Toolbar, Button, Typography} from "@material-ui/core";


export default function Index() {

    return (
        <html>
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">
                        My First Next.js Page
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        <div>
            <Link href="/itemList">
                <Button variant="contained" color="primary">
                    To Select page
                </Button>
            </Link>
        </div>
        </html>

    )
}
