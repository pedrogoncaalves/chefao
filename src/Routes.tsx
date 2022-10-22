import { Routes as WapperRoute, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/index.';
import { PostFeedPage } from './pages/PostFeed';
import Feed from './pages/Feed';
import LandingPage from './pages/LandingPage';
import LandingPageFinal from './pages/LandingPageFinal';
import TourPage from './pages/TourPage'


import  {SignUpPage}  from './pages/SignUpPage';



export default function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <WapperRoute>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Feed />} />
                <Route path="/landingpage" element={<LandingPage />} />
                <Route path="/LandingPage/2" element={<LandingPageFinal />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/tour" element={<TourPage />} />
                <Route path="/posts" element={<PostFeedPage/>} />
                
            </WapperRoute>
        </BrowserRouter>
    );
}
