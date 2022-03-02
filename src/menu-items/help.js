// assets
import { IconCloudFog} from '@tabler/icons';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// constant
const icons = { IconCloudFog };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const help = {
    id: 'About',
    type: 'group',
    children: [
        {
            id: 'help',
            title: 'help',
            type: 'item',
            url: '/help',
            icon:icons.HelpOutlineIcon,
            breadcrumbs: false
        }
    ]
};

export default help;