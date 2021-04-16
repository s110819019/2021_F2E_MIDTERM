import { Layout } from 'antd';
import AppHeader from '../components/Header';
import NavBar from "../components/NavBar";
import AppFooter from '../components/Footer';

const { Header, Content, Footer } = Layout;

function Home() {
    return(
        <Layout className="container layout__main">
            <Header className="layout__header">
                <AppHeader />
            </Header>
            <NavBar />
            <Content className="layout__content">
                
            </Content>
            <Footer className="layout__footer">
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default Home;