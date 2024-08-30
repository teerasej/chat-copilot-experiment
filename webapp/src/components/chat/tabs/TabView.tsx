// Copyright (c) Microsoft. All rights reserved.

import { makeStyles, shorthands } from '@fluentui/react-components';
import { tokens } from '@fluentui/tokens';
import { SharedStyles } from '../../../styles';
import { SimplifiedNewBotMenu } from '../chat-list/bot-menu/SimplifiedNewBotMenu';

const useClasses = makeStyles({
    root: {
        ...shorthands.margin(tokens.spacingVerticalM, tokens.spacingHorizontalM),
        ...SharedStyles.scroll,
        display: 'flex',
        flexDirection: 'column',
    },
    footer: {
        paddingTop: tokens.spacingVerticalL,
    },
});

interface ITabViewProps {
    title: string;
    children?: React.ReactNode;
}

export const TabView: React.FC<ITabViewProps> = ({ title, children }) => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <h2>{title}</h2>
            {children}
            <SimplifiedNewBotMenu />
        </div>
    );
};
