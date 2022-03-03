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
                    image:'https://res.cloudinary.com/doaejwdmk/image/upload/v1646290974/rebolt_cu1n0w.png',
                    children: [
                        {
                            id: 'Retrosynthesis',
                            title: 'Retrosynthesis',
                            type: 'item',
                            image:'https://res.cloudinary.com/doaejwdmk/image/upload/v1646291769/rebolt2_tq2oq0.png',
                            url: '/Rebolt/RetrosynthesisInput',
                            breadcrumbs: false
                        },
                        {
                            id: 'ForwardReaction',
                            title: 'Forward Reaction',
                            type: 'item',
                            image:'https://res.cloudinary.com/doaejwdmk/image/upload/v1646292054/rebolt3_jbpwva.png',
                            
                            url: '/Rebolt/ForwardReaction',
                            breadcrumbs: false
                        }
                    ]
                }
    
            ]
        };

export default pages;