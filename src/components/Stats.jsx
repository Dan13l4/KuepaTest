import React, {useEffect, useState} from "react";
import {getProPlayers} from "../server/players.js"

const Stats = () => {

    const [users, setUsers] = useState([{}]);

    useEffect(() => {
        getProPlayers()
        .then((response) =>{
            setUsers(response.data)
        })
        .catch(() =>{});
        }, []);

    return(
        <div className="containerStats inactive">
            <div className="row">
                <div className="col-xl-3 col-lg-6 mb-4">
                    <div className="bg-white rounded-lg p-5 shadow">
                        <h2 className="h6 font-weight-bold text-center mb-4">Metas</h2>
                        <div className="progress mx-auto" data-value="50">
                            <span className="progress-left">
                            <span className="progress-bar border-primary"></span>
                            </span>
                        <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">50<sup class="small">%</sup></div>
                        </div>
                        </div>
                        <div className="row text-center mt-4">
                            <div className="col-6 border-right">
                                <div className="h4 font-weight-bold mb-0">50/100</div><span class="small text-gray">Leads obtenidos</span>
                            </div>
                            <div class="col-6">
                                <div class="h4 font-weight-bold mb-0">50/100</div><span class="small text-gray">Cola de llamados</span>
                            </div>
                            <div class="col-6">
                                <div class="h4 font-weight-bold mb-0">10/20</div><span class="small text-gray">Matriculas finalizadas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;