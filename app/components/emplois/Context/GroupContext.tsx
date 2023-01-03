// Context for Group ID
import React, { createContext } from 'react';

export const GroupContext = createContext(
    {
        GroupID: 'Test Successful, continue...',
        SetGroupID: () => { },
        Schedule: [],
        SetSchedule: () => { }
    }
)