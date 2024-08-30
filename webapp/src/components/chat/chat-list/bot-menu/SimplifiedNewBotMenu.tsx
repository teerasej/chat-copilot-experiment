// Copyright (c) Microsoft. All rights reserved.

import { useState } from 'react';

import { Button, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Tooltip } from '@fluentui/react-components';
import { useChat } from '../../../../libs/hooks';
import { Add20 } from '../../../shared/BundledIcons';
import { InvitationJoinDialog } from '../../invitation-dialog/InvitationJoinDialog';

export const SimplifiedNewBotMenu: React.FunctionComponent = () => {
    const chat = useChat();

    // It needs to keep the menu open to keep the FileUploader reference
    // when the file uploader is clicked.
    const [isJoiningBot, setIsJoiningBot] = useState(false);

    const onAddChat = () => {
        void chat.createChat();
    };

    const onCloseDialog = () => {
        setIsJoiningBot(false);
    };

    return (
        <div>
            <Menu>
                <MenuTrigger disableButtonEnhancement>
                    <Tooltip content="Add a chat" relationship="label">
                        <Button data-testid="createNewConversationButton" icon={<Add20 />} appearance="transparent" />
                    </Tooltip>
                </MenuTrigger>
                <MenuPopover>
                    <MenuList>
                        <MenuItem data-testid="addNewBotMenuItem" onClick={onAddChat}>
                            New Chat Session
                        </MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
            {isJoiningBot && <InvitationJoinDialog onCloseDialog={onCloseDialog} />}
        </div>
    );
};
