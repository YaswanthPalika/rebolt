import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Faq = Loadable(lazy(() => import('views/Faq/Faq')));
const Projects = Loadable(lazy(() => import('views/Projects/Projects')));
const RetrosynthesisInput = Loadable(lazy(() => import('views/Rebolt/Retrosynthesis/RetrosynthesisInput')));
const RetrosynthesisOutput = Loadable(lazy(() => import('views/Rebolt/Retrosynthesis/RetrosynthesisOutput')));
const RetrosynthesisTreeOutput = Loadable(lazy(() => import('views/Rebolt/Retrosynthesis/RetrosynthesisTreeOutput')));
const ForwardReactionInput = Loadable(lazy(() => import('views/Rebolt/ForwardReaction/ForwardReactionInput')));
const ForwardReactionOutput = Loadable(lazy(() => import('views/Rebolt/ForwardReaction/ForwardReactionOutput')));
const Accountdetails = Loadable(lazy(() => import('views/Accountdetails')));
const Experiments = Loadable(lazy(() => import('views/Projects/Experiments')));
const TemplateFree = Loadable(lazy(() => import('views/Rebolt/Retrosynthesis/templateFree')));
const TemplateFreeTree = Loadable(lazy(() => import('views/Rebolt/Retrosynthesis/templatefreetree')));
const Help = Loadable(lazy(() => import('views/help/help')));




// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Projects />
        },
        {
            path: '/help',
            element: <Help />
        },
        {
            path: '/Projects',
            element: <Projects />
        },
        {
            path: '/Experiments/:pid',
            element: <Experiments />
        },
        {
            path: '/Faq/Faq',
            element: <Faq />
        },
        {
            path: '/Rebolt/RetrosynthesisInput',
            element: <RetrosynthesisInput />
        },
        {
            path: '/Rebolt/retrosynthesis/:eid',
            element: <RetrosynthesisOutput />
        },
        {
            path: '/Rebolt/retrosynthesis_tf/:eid',
            element: <TemplateFree />
        },
        {
            path: '/Rebolt/RetrosynthesisTreeOutput/:eid',
            element: <RetrosynthesisTreeOutput />
        },
        {
            path: '/Rebolt/ForwardReaction',
            element: <ForwardReactionInput />
        },
        {
            path: '/Rebolt/templatefreetree/:eid',
            element: <TemplateFreeTree />
        },
        {
            path: '/Rebolt/forward_reaction/:eid',
            element: <ForwardReactionOutput />
        },
        {
            path: '/Accountdetails',
            element: <Accountdetails />
        },

    ]
};

export default MainRoutes;
