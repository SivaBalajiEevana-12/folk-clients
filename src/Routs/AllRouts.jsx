import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home';
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Donation from "../Pages/Donation/Donation";
import Festivals from "../Pages/Festivals/Festivals";
import Gallery from "../Pages/Gallery/Gallery";
import PrivacyPolicy from "../Pages/Privacy-policy/PrivacyPolicy";
import Programmes from "../Pages/Programmes/Programmes";
import Recidency from "../Pages/Recidency/Recidency";
import TermsAndConditions from "../Pages/Terms-and-Conditions/TermsAndContions";
import Trips from "../Pages/Trips/Trips";
import AdminLayout from "../Layouts/AdminLayout"
import Admin from '../Admin/Admin';
import NotFound from '../Pages/NotFound/NotFound';
import AllForms from '../Components/Forms/AllForms';
import AdminYogaForm from '../Admin/AdminYoga/AdminYogaForm';
import YogaForHappiness from '../Pages/YogaForHappiness/YogaForHappiness';
import AdminYogadata from '../Admin/AdminYoga/AdminYogadata';
import AdminSecretForm from '../Admin/AdminSecret/AdminSecretForm';
import AdminSecretData from '../Admin/AdminSecret/AdminSecretData';
import AdminMindControlForm from '../Admin/AdminMindControl/AdminMindControlForm';
import AdminMindControlData from '../Admin/AdminMindControl/AdminMindControlData';
import AdminYogaDataSingle from '../Admin/AdminYoga/AdminYogaDataSingle';
import AdminSecretDataSingle from '../Admin/AdminSecret/AdminSecretDataSingle';
import AdminMindControlSingle from '../Admin/AdminMindControl/AdminMindControlSingle';
import AdminYogaDataEdit from '../Admin/AdminYoga/AdminYogaDataEdit';
import AdminSecretDataEdit from '../Admin/AdminSecret/AdminSecretDataEdit';
import AdminMindControlEdit from '../Admin/AdminMindControl/AdminMindControlEdit';
import SecretOfSuccess from '../Pages/SecretOfSuccess/SecretOfSuccess';
import ArtOfMindControl from '../Pages/ArtOfMindControl/ArtOfMindControl';
import AdminTripsFrom from '../Admin/AdminTrips/AdminTripsFrom';
import AdminYogaDataTable from '../Admin/AdminYoga/AdminYogaDataTable';
import AdminTripsData from '../Admin/AdminTrips/AdminTripsData';
import AdminTripsDataSingle from '../Admin/AdminTrips/AdminTripsDataSingle';
import AdminTripsDataEdit from '../Admin/AdminTrips/AdminTripsDataEdit';
import SkillInput from '../Admin/SkillInput';
import AdminResidencyForm from '../Admin/AdminResidency/AdminResidencyForm';
import AdminResidencyData from '../Admin/AdminResidency/AdminResidencyData';
import AdminResidencyDataSingle from '../Admin/AdminResidency/AdminResidencyDataSingle';
import AdminResidencyDataEdit from '../Admin/AdminResidency/AdminResidencyDataEdit';
import AdminFestivalsForm from '../Admin/AdminFestivals/AdminFestivalsForm';
import AdminFestivalsDate from '../Admin/AdminFestivals/AdminFestivalsDate';
import AdminFestivalsDateSingle from '../Admin/AdminFestivals/AdminFestivalsDateSingle';
import AdminFestivalsDateEdit from '../Admin/AdminFestivals/AdminFestivalsDateEdit';
import AdminBlogsForm from '../Admin/AdminBlogs/AdminBlogsForm';
import AdminBlogsData from '../Admin/AdminBlogs/AdminBlogsData';
import AdminBlogsDataSingle from '../Admin/AdminBlogs/AdminBlogsDataSingle';
import AdminBlogsDataEdit from '../Admin/AdminBlogs/AdminBlogsDataEdit';
import AdminDonationsForm from '../Admin/AdminDonations/AdminDonationsForm';
import AdminDonationsData from '../Admin/AdminDonations/AdminDonationsData';
import AdminDonationsDataSingle from '../Admin/AdminDonations/AdminDonationsDataSingle';
import AdminDonationsDataEdit from '../Admin/AdminDonations/AdminDonationsDataEdit';
import AdminGalleryForm from '../Admin/AdminGallery/AdminGalleryForm';
import AdminGalleryData from '../Admin/AdminGallery/AdminGalleryData';
import AdminGalleryDateSingle from '../Admin/AdminGallery/AdminGalleryDateSingle';
import AdminGalleryEdit from '../Admin/AdminGallery/AdminGalleryEdit';
import YogaDateChartTwo from '../Admin/AdminCharts/YogaCharts/YogaDateChartTwo';
import YogaForm from '../Pages/YogaForHappiness/YogaForm';
import SecretOfSuccessForm from '../Pages/SecretOfSuccess/SecretOfSuccessFrom';
import ArtOFMindForm from '../Pages/ArtOfMindControl/ArtOFMindForm';
import TripsForm from '../Pages/Trips/TripsForm';
import FestivalsForm from '../Pages/Festivals/FestivalsForm';
import AdminYogaUserFlex from '../Admin/AdminYoga/AdminYogaUserFlex';
import AdminSecretUsersFlex from '../Admin/AdminSecret/AdminSecretUsersFlex';
import AdminMindControlUsersFlex from '../Admin/AdminMindControl/AdminMindControlUsersFlex';
import AdminFestivalsUsersDataFlex from '../Admin/AdminFestivals/AdminFestivalsUsersDataFlex';
import AdminTripsUsersFlex from '../Admin/AdminTrips/AdminTripsUsersFlex';
import YogaSingeData from '../Pages/YogaForHappiness/YogaSingeData';
import PlusForm from '../Dummy/PlusForm';
import TripDetailsPage from '../Dummy/TripsDetails';
import Login from '../Admin/AdminLogin/Login';
import LoginLayout from '../Layouts/LoginLayout';
import PrivateRoute from '../Private/Private';
import Dummy2 from '../Dummy/Dummy2';
import FestivalSinglePage from '../Components/FestivalRelated/FestivalSinglePage';
import GallerySinglePage from '../Components/GalleryRelated/GallerySinglePage';
import TripSinglePage from '../Components/TripsRelated/TripSinglePage';
import YogaSinglePage from '../Pages/YogaForHappiness/YogaSinglePage';
import MindControlSinglePage from '../Components/ArtOfMindControlRelated/MindControlSinglePage';
import DonationSinglePage from '../Components/DonationRelated/DonationSinglePage';
import ResidencySinglePage from '../Components/ResidencyRelated/ResidencySinglePage'
import AdminYogaEvents from '../Admin/AdminYoga/AdminYogaEvents';
import AdminSecretEvents from '../Admin/AdminSecret/AdminSecretEvents';
import AdminMindEvents from '../Admin/AdminMindControl/AdminMindEvents';
import AdminTripsEvents from '../Admin/AdminTrips/AdminTripsEvents';
import AdminFestivalsEvents from '../Admin/AdminFestivals/AdminFestivalsEvents';
import Events from '../Admin/RegisterEvent/Events';
import EventRegistrationForm from '../Admin/RegisterEvent/EventRegistrationForm';
import Register from '../Pages/WhatsApp/Register';




const AllRouts = () => {
  // console.log("")
  return (
    <>
        <Routes>
            <Route element={<MainLayout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/blogs' element={<Blogs/>}/>
                  <Route path='/donation' element={<Donation/>}/>
                  <Route path='/donation/:singlePage' element={<DonationSinglePage />} /> 
                  <Route path='/festivals' element={<Festivals/>}/>
                  <Route path='/festivals/festivalsForm' element={<FestivalsForm/>}/>
                  <Route path='/festival/:singlePage' element={<FestivalSinglePage />} />
                  <Route path='/gallery' element={<Gallery/>}/>
                  <Route path='/gallery/:singlePage' element={<GallerySinglePage />} />
                  <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
                  <Route path='/programmes' element={<Programmes/>}/>
                  <Route path='/recidency' element={<Recidency/>}/>
                  <Route path='/recidency/:singlePage' element={<ResidencySinglePage />} />
                  <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
                  <Route path='/trips' element={<Trips/>}/>
                  <Route path='/trips/tripsForm' element={<TripsForm/>}/>
                  <Route path='/trips/:singlePage' element={<TripSinglePage />} />
                  <Route path='/allForms' element={<AllForms/>}/>
                  <Route path='/yogaForHappiness' element={<YogaForHappiness/>} />
                  <Route path='/yogaForHappiness/yogaForm' element={<YogaForm/>} /> 
                  <Route path='/yoga/:singleData' element={<YogaSingeData/>} />  
                  <Route path='/yogaForHappiness/:singlePage' element={<YogaSinglePage />} /> 
                  <Route path='/secretOfSuccess' element={<SecretOfSuccess/>} />
                  <Route path='/secretOfSuccess/secretForm' element={<SecretOfSuccessForm/>} />
                  <Route path='/artOfMindControl' element={<ArtOfMindControl/>} />
                  <Route path='/artOfMindControl/artFrom' element={<ArtOFMindForm/>} />
                  <Route path='/artOfMindControl/:singlePage' element={<MindControlSinglePage />} />
                  <Route path='/handleAddSection' element={<PlusForm/>} />
                   <Route path='/whatsapp/register' element={<Register/>} />
                  <Route path='/dummy2' element={<Dummy2/>} />
                  <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route element={<AdminLayout/>}>
                  <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>}/>
                  <Route path='/admin/yoga/createForm' element={<AdminYogaForm/>} />
                  <Route path='/admin/yoga/data' element={<AdminYogadata/>} />
                  <Route path='/admin/yoga/events' element={<AdminYogaEvents/>} />
                  <Route path='/admin/yoga/data/:id' element={<AdminYogaDataSingle/>}/>
                  <Route path='/admin/yoda/data/edit/:id' element={<AdminYogaDataEdit/>} />
                  <Route path='/admin/yoga/response/data' element={<AdminYogaUserFlex/>} />
                  <Route path='/admin/secret/createForm' element={<AdminSecretForm/>} />
                  <Route path='/admin/secret/data' element={<AdminSecretData/>} />
                  <Route path='/admin/secret/events' element={<AdminSecretEvents/>} />
                  <Route path='/admin/secret/data/:id' element={<AdminSecretDataSingle/>}/>
                  <Route path='/admin/secret/data/edit/:id' element={<AdminSecretDataEdit/>}/>
                  <Route path='/admin/secret/response/data' element={<AdminSecretUsersFlex/>} />
                  <Route path='/admin/mindControl/createForm' element={<AdminMindControlForm/>} />
                  <Route path='/admin/mindControl/data' element={<AdminMindControlData/>} />
                  <Route path='/admin/mindControl/events' element={<AdminMindEvents/>} />
                  <Route path='/admin/mindControl/data/:id' element={<AdminMindControlSingle/>}/>
                  <Route path='/admin/mindControl/data/edit/:id' element={<AdminMindControlEdit/>}/>
                  <Route path='/admin/mindControl/response/data' element={<AdminMindControlUsersFlex/>} />
                  <Route path='/admin/trips/createForm' element={<AdminTripsFrom/>}/>
                  <Route path='/admin/trips/data' element={<AdminTripsData/>}/>
                  <Route path='/admin/trips/events' element={<AdminTripsEvents/>}/>
                  <Route path='/admin/trips/data/:id' element={<AdminTripsDataSingle/>}/>
                  <Route path='/admin/trips/response/data' element={<AdminTripsUsersFlex/>}/>
                  <Route path='/admin/trips/data/edit/:id' element={<AdminTripsDataEdit/>}/>
                  <Route path='/admin/residency/createForm' element={<AdminResidencyForm/>}/>
                  <Route path='/admin/residency/data' element={<AdminResidencyData/>}/>
                  <Route path='/admin/residency/data/:id' element={<AdminResidencyDataSingle/>}/>
                  <Route path='/admin/residency/data/edit/:id' element={<AdminResidencyDataEdit/>}/>
                  <Route path='/admin/festivals/createForm' element={<AdminFestivalsForm/>}/>
                  <Route path='/admin/festivals/data' element={<AdminFestivalsDate/>}/>
                  <Route path='/admin/festivals/events' element={<AdminFestivalsEvents/>}/>
                  <Route path='/admin/festivals/data/:id' element={<AdminFestivalsDateSingle/>}/>
                  <Route path='/admin/festivals/data/edit/:id' element={<AdminFestivalsDateEdit/>}/>
                  <Route path='/admin/festivals/response/data' element={<AdminFestivalsUsersDataFlex/>}/>
                  <Route path='/admin/blogs/createForm' element={<AdminBlogsForm/>}/>
                  <Route path='/admin/blogs/data' element={<AdminBlogsData/>}/>
                  <Route path='/admin/blogs/data/:id' element={<AdminBlogsDataSingle/>}/>
                  <Route path='/admin/blogs/data/edit/:id' element={<AdminBlogsDataEdit/>}/>
                  <Route path='/admin/donations/createForm' element={<AdminDonationsForm/>}/>
                  <Route path='/admin/donations/data' element={<AdminDonationsData/>}/>
                  <Route path='/admin/donations/data/:id' element={<AdminDonationsDataSingle/>}/>
                  <Route path='/admin/donations/data/edit/:id' element={<AdminDonationsDataEdit/>}/>
                  <Route path='/admin/gallery/createForm' element={<AdminGalleryForm/>}/>
                  <Route path='/admin/gallery/data' element={<AdminGalleryData/>}/>
                  <Route path='/admin/gallery/data/:id' element={<AdminGalleryDateSingle/>}/>
                  <Route path='/admin/gallery/data/edit/:id' element={<AdminGalleryEdit/>}/>  
                  <Route path='/admin/registerEvent' element={<Events/>} />   
                  <Route path='/admin/registerEvent/createForm' element={<EventRegistrationForm/>} />      
                  <Route path='/skill' element={<SkillInput/>}/>
            </Route>

            <Route element={<LoginLayout/>}>
            <Route path='/api/admin/login' element={<Login/>} />
            </Route>
        </Routes>
    </>
  )
}

export default AllRouts