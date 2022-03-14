// assets
import { IconBoxModel } from '@tabler/icons';


// constant
const icons = { IconBoxModel};


// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'About',
    type: 'group',
    children: [
        {
            id: 'About',
            title: 'About',
            type: 'item',
            url: '/',
            icon: icons.IconBoxModel ,
            image:'https://res.cloudinary.com/doaejwdmk/image/upload/v1646290974/about_auvyjd.png',
            breadcrumbs: false
        }
    ]
};

export default dashboard;
