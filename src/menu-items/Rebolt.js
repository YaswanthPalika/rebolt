// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Rebolt',
    type: 'group',
   

            children: [
                {
                    id: 'Rebolt',
                    title: 'Rebolt',
                    type: 'collapse',
                    icon: icons.IconWindmill,
                    children: [
                        {
                            id: 'Retrosynthesis',
                            title: 'Retrosynthesis',
                            type: 'item',
                            url: '/Rebolt/RetrosynthesisInput',
                            breadcrumbs: false
                        },
                        {
                            id: 'ForwardReaction',
                            title: 'ForwardReaction',
                            type: 'item',
                            url: '/Rebolt/ForwardReaction',
                            breadcrumbs: false
                        }
                    ]
                }
    
            ]
        };

export default pages;