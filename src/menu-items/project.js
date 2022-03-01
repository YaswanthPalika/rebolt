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
            breadcrumbs: false
        }
    ]
};

export default project;