import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import path from '../../constants/path';
import './Admin.scss';
import fitfoodImage from '../../assets/images/logo_fitfood.png';

const homeIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.75 17.8197C12.75 17.4054 12.4142 17.0697 12 17.0697C11.5858 17.0697 11.25 17.4054 11.25 17.8197V19.8197C11.25 20.2339 11.5858 20.5697 12 20.5697C12.4142 20.5697 12.75 20.2339 12.75 19.8197V17.8197Z'
      fill='#111112'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.2108 1.25387C12.0703 1.24871 11.9297 1.24871 11.7892 1.25387C10.8618 1.28789 10.0268 1.60323 9.11115 2.12818C8.21888 2.63974 7.19165 3.38608 5.88826 4.33305L5.81741 4.38453C4.51402 5.33149 3.48676 6.07783 2.72451 6.76835C1.94232 7.47693 1.38435 8.17368 1.06542 9.04515C1.01711 9.17717 0.973653 9.31091 0.935143 9.44611C0.680923 10.3386 0.722785 11.2303 0.939096 12.2633C1.14989 13.27 1.54227 14.4776 2.04013 16.0098L2.0672 16.0931C2.56503 17.6253 2.95741 18.8329 3.37858 19.7712C3.81077 20.7341 4.301 21.4801 5.03127 22.0527C5.14189 22.1394 5.25566 22.2221 5.37234 22.3005C6.10705 22.7942 6.92433 23.0315 7.90981 23.1509C8.95815 23.2779 10.2689 23.2779 11.9498 23.2779H12.0502C13.7312 23.2779 15.0419 23.2779 16.0902 23.1509C17.0757 23.0315 17.893 22.7942 18.6277 22.3005C18.7444 22.2221 18.8581 22.1394 18.9687 22.0527C19.699 21.4801 20.1892 20.7341 20.6214 19.7712C21.0426 18.8329 21.435 17.6253 21.9328 16.093L21.9599 16.0097C22.4577 14.4776 22.8501 13.2699 23.0609 12.2633C23.2772 11.2303 23.3191 10.3386 23.0649 9.44611C23.0264 9.31091 22.9829 9.17717 22.9346 9.04515C22.6157 8.17368 22.0577 7.47693 21.2755 6.76835C20.5132 6.07782 19.486 5.33149 18.1826 4.38452L18.1117 4.33303C16.8084 3.38607 15.7811 2.63973 14.8889 2.12818C13.9733 1.60323 13.1382 1.28789 12.2108 1.25387ZM11.8442 2.75286C11.948 2.74905 12.052 2.74905 12.1558 2.75286C12.7512 2.7747 13.3443 2.97167 14.1428 3.42948C14.9566 3.89603 15.9189 4.59396 17.2655 5.57232C18.6121 6.55068 19.5733 7.25026 20.2684 7.88002C20.9506 8.49798 21.3212 9.00112 21.526 9.56067C21.5617 9.65824 21.5938 9.75709 21.6222 9.85703C21.7855 10.4301 21.7814 11.055 21.5928 11.9558C21.4005 12.874 21.0341 14.0049 20.5198 15.5879C20.0054 17.1709 19.6371 18.3012 19.253 19.157C18.8761 19.9967 18.5121 20.5046 18.0432 20.8723C17.9614 20.9364 17.8773 20.9975 17.7911 21.0555C17.4955 21.254 17.164 21.4015 16.75 21.5091V17.8197C16.75 15.1963 14.6234 13.0697 12 13.0697C9.37665 13.0697 7.25001 15.1963 7.25001 17.8197V21.5091C6.83605 21.4015 6.50448 21.254 6.20894 21.0555C6.12269 20.9975 6.0386 20.9364 5.95684 20.8723C5.48796 20.5046 5.12396 19.9967 4.74705 19.157C4.36293 18.3012 3.9946 17.1709 3.48025 15.5879C2.9659 14.0049 2.59951 12.874 2.40725 11.9558C2.21861 11.055 2.21454 10.4301 2.37776 9.85703C2.40623 9.7571 2.43834 9.65824 2.47405 9.56067C2.67883 9.00112 3.04942 8.49798 3.73157 7.88002C4.42676 7.25026 5.38791 6.55068 6.73451 5.57232C8.0811 4.59396 9.04345 3.89603 9.85722 3.42948C10.6557 2.97167 11.2488 2.7747 11.8442 2.75286ZM12 14.5697C13.7949 14.5697 15.25 16.0247 15.25 17.8197V21.7217C14.4066 21.7771 13.3633 21.7779 12 21.7779C10.6367 21.7779 9.59341 21.7771 8.75001 21.7218V17.8197C8.75001 16.0247 10.2051 14.5697 12 14.5697Z'
      fill='#111112'
    />
  </svg>
);

const employeesIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.25 4C11.3211 4 13 5.67893 13 7.75C13 9.82107 11.3211 11.5 9.25 11.5C7.17893 11.5 5.5 9.82107 5.5 7.75C5.5 5.67893 7.17893 4 9.25 4ZM11.5 7.75C11.5 6.50736 10.4926 5.5 9.25 5.5C8.00736 5.5 7 6.50736 7 7.75C7 8.99264 8.00736 10 9.25 10C10.4926 10 11.5 8.99264 11.5 7.75Z'
      fill='#111112'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.25 13C14.3211 13 16 14.6789 16 16.75C16 18.8211 14.3211 20.5 12.25 20.5H6.25C4.17893 20.5 2.5 18.8211 2.5 16.75C2.5 14.6789 4.17893 13 6.25 13H12.25ZM14.5 16.75C14.5 15.5074 13.4926 14.5 12.25 14.5H6.25C5.00736 14.5 4 15.5074 4 16.75C4 17.9926 5.00736 19 6.25 19H12.25C13.4926 19 14.5 17.9926 14.5 16.75Z'
      fill='#111112'
    />
    <path
      d='M13.4979 10.3887C13.6556 10.1353 13.9515 10 14.25 10C15.4926 10 16.5 8.99264 16.5 7.75C16.5 6.50736 15.4926 5.5 14.25 5.5C13.9515 5.5 13.6556 5.36473 13.4979 5.11135C13.4909 5.10014 13.4839 5.08896 13.4768 5.07782C13.2142 4.66331 13.3473 4.0764 13.835 4.0227C13.9713 4.0077 14.1097 4 14.25 4C16.3211 4 18 5.67893 18 7.75C18 9.82107 16.3211 11.5 14.25 11.5C14.1097 11.5 13.9713 11.4923 13.835 11.4773C13.3473 11.4236 13.2142 10.8367 13.4768 10.4222C13.4839 10.411 13.4909 10.3999 13.4979 10.3887Z'
      fill='#111112'
    />
    <path
      d='M16.5417 18.3169C16.6552 18.1275 16.8556 18 17.0764 18H17.25C18.4926 18 19.5 16.9926 19.5 15.75C19.5 14.5074 18.4926 13.5 17.25 13.5H17.0764C16.8556 13.5 16.6552 13.3725 16.5417 13.1831C16.2646 12.7208 16.5653 12 17.1043 12H17.25C19.3211 12 21 13.6789 21 15.75C21 17.8211 19.3211 19.5 17.25 19.5H17.1043C16.5653 19.5 16.2646 18.7792 16.5417 18.3169Z'
      fill='#111112'
    />
  </svg>
);

const productsIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.7798 10.5047C16.372 9.06632 14.9337 7.62792 13.4953 8.2202L10.8184 9.32245C10.1403 9.60166 9.60181 10.1401 9.32259 10.8182L8.22035 13.4951C7.62807 14.9335 9.06645 16.3719 10.5048 15.7796L13.1817 14.6774C13.8598 14.3982 14.3983 13.8597 14.6775 13.1816L15.7798 10.5047ZM14.0664 9.60722C14.2719 9.52261 14.4774 9.72809 14.3927 9.93358L13.2905 12.6105C13.1636 12.9187 12.9188 13.1634 12.6106 13.2904L9.93372 14.3926C9.72824 14.4772 9.52275 14.2717 9.60737 14.0662L10.7096 11.3894C10.8365 11.0811 11.0813 10.8364 11.3895 10.7095L14.0664 9.60722Z'
      fill='#111112'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.0668 1.79551C14.2622 1.72362 13.2791 1.72363 12.0353 1.72363H11.9648C10.721 1.72363 9.73787 1.72362 8.9333 1.79551C8.10684 1.86936 7.41559 2.0224 6.76227 2.35755C6.59304 2.44437 6.42822 2.53952 6.26842 2.64268C5.65151 3.04089 5.17335 3.56301 4.69617 4.24182C4.23162 4.90266 3.74005 5.7541 3.11815 6.83127L3.08293 6.89227C2.46102 7.96944 1.96944 8.82087 1.62941 9.5536C1.28013 10.3063 1.06704 10.9814 1.03063 11.7148C1.0212 11.9048 1.0212 12.0951 1.03063 12.285C1.06704 13.0184 1.28013 13.6936 1.62941 14.4462C1.96943 15.1789 2.46101 16.0304 3.08291 17.1075L3.11813 17.1685C3.74003 18.2457 4.23162 19.0972 4.69617 19.758C5.17335 20.4368 5.65151 20.9589 6.26842 21.3571C6.42822 21.4603 6.59304 21.5555 6.76227 21.6423C7.41559 21.9774 8.10684 22.1305 8.9333 22.2043C9.73786 22.2762 10.721 22.2762 11.9648 22.2762H12.0353C13.2791 22.2762 14.2623 22.2762 15.0668 22.2043C15.8933 22.1305 16.5845 21.9774 17.2378 21.6423C17.4071 21.5555 17.5719 21.4603 17.7317 21.3571C18.3486 20.9589 18.8268 20.4368 19.3039 19.758C19.7685 19.0972 20.2601 18.2458 20.8819 17.1686L20.9172 17.1076C21.5391 16.0304 22.0307 15.179 22.3707 14.4462C22.72 13.6936 22.9331 13.0184 22.9695 12.285C22.9789 12.0951 22.9789 11.9048 22.9695 11.7148C22.9331 10.9814 22.72 10.3063 22.3707 9.5536C22.0307 8.82087 21.5391 7.96943 20.9172 6.89225L20.8819 6.83121C20.26 5.75406 19.7685 4.90265 19.3039 4.24182C18.8268 3.56301 18.3486 3.04089 17.7317 2.64268C17.5719 2.53953 17.4071 2.44437 17.2378 2.35755C16.5845 2.0224 15.8933 1.86936 15.0668 1.79551ZM7.44693 3.69218C7.86815 3.4761 8.35098 3.35352 9.0668 3.28956C9.79692 3.22432 10.7133 3.22363 12.0001 3.22363C13.2868 3.22363 14.2032 3.22432 14.9333 3.28956C15.6491 3.35352 16.132 3.4761 16.5532 3.69218C16.6783 3.75635 16.8001 3.82668 16.9182 3.90293C17.3159 4.15967 17.6635 4.51653 18.0768 5.10446C18.4984 5.70414 18.9571 6.49738 19.6005 7.61177C20.2439 8.72616 20.7015 9.52009 21.0101 10.185C21.3126 10.8369 21.4479 11.3163 21.4713 11.7892C21.4783 11.9296 21.4783 12.0702 21.4713 12.2107C21.4479 12.6835 21.3126 13.1629 21.0101 13.8148C20.7015 14.4797 20.2439 15.2737 19.6005 16.3881C18.9571 17.5024 18.4984 18.2957 18.0768 18.8954C17.6635 19.4833 17.3159 19.8402 16.9182 20.0969C16.8001 20.1731 16.6783 20.2435 16.5532 20.3076C16.132 20.5237 15.6491 20.6463 14.9333 20.7103C14.2032 20.7755 13.2868 20.7762 12.0001 20.7762C10.7133 20.7762 9.79692 20.7755 9.0668 20.7103C8.35098 20.6463 7.86815 20.5237 7.44693 20.3076C7.32185 20.2435 7.20003 20.1731 7.08191 20.0969C6.68417 19.8402 6.3366 19.4833 5.9233 18.8954C5.50174 18.2957 5.04297 17.5024 4.39958 16.3881C3.75618 15.2737 3.2986 14.4797 2.99004 13.8148C2.68753 13.1629 2.55226 12.6835 2.52879 12.2107C2.52182 12.0702 2.52182 11.9296 2.52879 11.7892C2.55226 11.3163 2.68753 10.8369 2.99004 10.185C3.2986 9.52009 3.75618 8.72616 4.39958 7.61177C5.04297 6.49738 5.50174 5.70414 5.9233 5.10446C6.3366 4.51653 6.68417 4.15967 7.08191 3.90293C7.20003 3.82668 7.32185 3.75635 7.44693 3.69218Z'
      fill='#111112'
    />
  </svg>
);

export default function Admin() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='admin'>
      <div className='admin__navbar' style={{ width: `${toggle ? '20%' : '5%'}` }}>
        <Navbar toggle={toggle} setToggle={setToggle}>
          <Navbar.Toggle />
          <Navbar.Item image={fitfoodImage} title='Fitfood Admin Page' />
          <Navbar.Border />
          <Navbar.Item Svg={homeIcon} title='Trở về trang chủ' navigate={path.home} />
          <Navbar.Border />
          <Navbar.List>
            <Navbar.Item Svg={employeesIcon} title='Quản lý nhân viên' navigate={path.admin} end />
            <Navbar.Item Svg={productsIcon} title='Quản lý hàng hoá' navigate={path.productManagement} />
            <Navbar.Item Svg={productsIcon} title='Quản lý hàng hoá' navigate={path.productManagement} />
            <Navbar.Item Svg={productsIcon} title='Quản lý hàng hoá' navigate={path.productManagement} />
          </Navbar.List>
        </Navbar>
      </div>
      <div className='admin__outlet' style={{ width: `${toggle ? '80%' : '95%'}` }}>
        <Outlet />
      </div>
    </div>
  );
}
