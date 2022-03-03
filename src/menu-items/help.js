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
            breadcrumbs: false,
            image:'https://res.cloudinary.com/doaejwdmk/image/upload/v1646290974/help_n3ymto.png'
        }
    ]
};

export default help;