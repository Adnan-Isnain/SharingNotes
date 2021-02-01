import React, {useState} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Wrapper from '../../components/Wrapper/Wrapper';

const Layout = (props) => {
    
    const [configSite, setconfigSite] = useState({showMenu: false, showNote: false});

    const ToggleHandler = (type) => {
        setconfigSite({
            ...configSite,
            [type]: !configSite[type]
        });
    }

    const closeToggleHandler = (type) => {
        setconfigSite({
            ...configSite,
            [type]: false
        });
    }


    return(
        <React.Fragment>
            {/* Toolbar untuk bagian atas --> Memasukkan 2 variable --> Toogle Click dan Auth*/}
            <Toolbar 
                toggleHandler={() => ToggleHandler("showMenu")} 
            />
            <SideDrawer 
                    open={configSite["showMenu"]} 
                    close={() => closeToggleHandler("showMenu")} 
            />
            <Wrapper 
                toggleHandler={() => ToggleHandler("showMenu")} 
                close={() => closeToggleHandler("showMenu")} 
                info={configSite["showNote"]}
                // newNoteHandler = {() => ToggleHandler("showNewNote")}
                // closeNewNoteHandler = {() => closeToggleHandler("showNewNote")}
            >
                {props.children}
            </Wrapper>
        </React.Fragment>
    );
}

export default Layout;