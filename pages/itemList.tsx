import React from "react";
import Link from 'next/link';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default () => {
    return (
        <Paper>
            <Tabs indicatorColor="primary" textColor="primary" centered>
                <Link href='/'>
                    <Tab label="To Main" />
                </Link>
                <Link href='/about'>
                    <Tab label="To About" />
                </Link>
            </Tabs>
        </Paper>
    )
}