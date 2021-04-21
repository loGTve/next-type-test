import Button from '@material-ui/core/Button';
import Link from 'next/link';

export default function Index() {
    return (
        <Link href="/about">
        <Button variant="contained" color="primary">
            Button
        </Button>
        </Link>
    )
}
