import React from "react";
import Link from 'next/link';
import { Paper, Tabs, Tab, Box, makeStyles } from '@material-ui/core';

const boxStyle = makeStyles({
    Boxes: {
        height: '80px',
        width: '700px',
        marginTop: '90px'
    }
})


export default () => {
    const styleBox = boxStyle();

    return (
        <Paper>
            <Box>
            <Tabs indicatorColor="primary" textColor="primary" centered >
                <Link href='/'>
                    <Tab label="To Main" />
                </Link>
                <Link href='/about'>
                    <Tab label="To About" />
                </Link>
            </Tabs>
            </Box>
        </Paper>
    )
}