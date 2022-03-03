// assets
import { IconCloudFog} from '@tabler/icons';


// constant
const icons = { IconCloudFog };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const project = {
    id: 'About',
    type: 'group',
    children: [
        {
            id: 'projects',
            title: 'Projects',
            type: 'item',
            url: '/Projects',
            icon:icons.IconCloudFog,
            breadcrumbs: false,
            image:'https://res.cloudinary.com/doaejwdmk/image/upload/v1646288251/image5_yxuono.png'
        }
    ]
};

export default project;