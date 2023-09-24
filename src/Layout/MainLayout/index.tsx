import { Navbar, Footer } from "../../Layout"
import { Outlet } from "react-router-dom";


const MainLayout: React.FC = () => {
    return (
        <div style={{ width:'100vw', textAlign: 'center' }}>
            <Navbar />

            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )

}

export default MainLayout;