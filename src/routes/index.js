import TrangChu from '~/pages/TrangChu/TrangChu.js';
import SanPham from '~/pages/SanPham/SanPham.js';
import GioiThieu from '~/pages/GioiThieu/GioiThieu';
import TinTuc from '~/pages/TinTuc/TinTuc';
import DoiTac from '~/pages/DoiTac/DoiTac';
import LienHe from '~/pages/LienHe/LienHe';
import Admin from '~/pages/Admin/Admin';

const publicRoutes = [
    { path: '/', component: TrangChu },
    { path: '/sanpham', component: SanPham },
    { path: '/gioithieu', component: GioiThieu },
    { path: '/tintuc', component: TinTuc },
    { path: '/doitac', component: DoiTac },
    { path: '/lienhe', component: LienHe },
    { path: '/admin', component: Admin, layout: null },
];

export { publicRoutes };
