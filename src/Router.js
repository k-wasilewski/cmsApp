import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Client from "./components/client/Client";
import Documents from "./components/documents/Documents";
import Files from "./components/files/Files";
import ConfigList from "./components/modifications/ConfigList";
import ClientPersonal from "./components/client/personal/ClientPersonal";
import ClientHistory from "./components/client/history/ClientHistory";
import ClientService from "./components/client/service/ClientService";
import ClientRegister from "./components/client/register/ClientRegister";
import ClientForm from "./components/client/form/ClientForm";

const Router = () => {
    return (
        <div className='router'>
            <Switch>
                <Route path={`/`} exact component={Client} />
                <Route path={`/documents`} component={Documents} />
                <Route path={`/files`} component={Files} />
                <Route path={`/modifications`} component={ConfigList} />

                <Route path={`/client_personal`} component={ClientPersonal} />
                <Route path={`/client_history`} component={ClientHistory} />
                <Route path={`/client_service`} component={ClientService} />
                <Route path={`/client_register`} component={ClientRegister} />
                <Route path={`/client_form`} component={ClientForm} />
            </Switch>
        </div>
    );
}

export default Router;