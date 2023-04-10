
import {React}from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import { UseCollapseInput, useCollapse } from "react-collapsed";
import tender from './Tender.css';
import { Link } from "react-router-dom";

const Tender=()=>{
    
    const [toggle, setToggle] = useState("");
    const expand = toggle ? "width1" : "";

    return(
      
       <div>
              
        <p>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <title>Results</title>
          <style dangerouslySetInnerHTML={{__html: "\n            \n            .btn-grad \n{\n    \n    position: absolute;\n    width: auto;\n    height: 40px;\n    font-size: auto;\n    text-align: center;\n    background: linear-gradient(90deg, #008ECB 0%, #005AE0 100%);\n    border-radius: 3px;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    \n    \n}\n\n.btn-grad:hover\n{\n    border:2px solid rgb(0, 75, 107);\n    background: linear-gradient(90deg,#005AE0 0%, #008ECB 100%);\n    \n\n}\n\n\n#scroll\n{\n    width:auto;\n    border: 1px solid black;\n    height: 500px;\n    overflow: scroll;\n    margin: 60px;\n    margin-right: 110px;\n    margin-top:20px;\n    scroll-behavior: smooth;\n    \n    \n}\n\n\nth \n{\n    border: 1px solid #D5D5D5;\n    padding: 25px;  \n    height: 80px;\n    font-size: 16px;\n    text-align: center;\n    \n}\n\n\ntd\n{\n    border: 1px solid #D5D5D5;\n    text-align: center;\n    padding: 25px;\n    height: 60px;\n    align-content: center;\n}\n  a \n  {\n      text-decoration: none;\n      display: inline-block;\n      padding: 8px 16px;\n  }\n\n  a:hover {\n      background-color: #ddd;\n      color: black;\n  }\n\n  .previous {\n      background-image: linear-gradient(to right, #E44D26 0%, #F16529 51%, #E44D26 100%);\n      color: rgb(255, 255, 255);\n      border-radius: 5px;\n      width: 120px;\n      text-align: center;\n      font-weight: bolder;\n  }\n\n  .next {\n      background-image: linear-gradient(to right, #E44D26 0%, #F16529 51%, #E44D26 100%);\n      color: rgb(255, 255, 255);\n      border-radius: 5px;\n      width: 120px;\n      text-align: center;\n      font-weight: bolder;\n  }\n\n  .round {\n      border-radius: 50%;\n  }\n\n\n@media only screen and (max-width: 1024px) \n{\n        .column \n        {\n            width: 100%;\n            margin-left: 250px;\n        }\n        .abc\n        {\n          margin-right: 0px;\n        }\n}\n\n/*-------------------------------------ACCORDIAN---------------------------------------------------*/\n@import url('https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css');\n.pcs:after {\ncontent: \" pcs\";\n}\n.cur:before {\ncontent: \"$\";\n}\n.per:after {\ncontent: \"%\";\n}\n* {\nbox-sizing: border-box;\n}\nbody {\npadding: 0.2em 2em;\n}\ntable {\nwidth: 100%;\ntable-layout: fixed;\n\n}\ntable th {\ntext-align: center;\nwidth: 120px;\nborder-bottom: 1px solid #ccc;\n}\ntable th, table td {\npadding: 0.4em;\n}\ntable.fold-table > tbody > tr.view td, table.fold-table > tbody > tr.view th {\ncursor: pointer;\n}\ntable.fold-table > tbody > tr.view td:first-child, table.fold-table > tbody > tr.view th:first-child {\nposition: relative;\npadding-left: 20px;\n}\ntable.fold-table > tbody > tr.view td:first-child:before, table.fold-table > tbody > tr.view th:first-child:before {\nposition: absolute;\ntop: 50%;\nleft: 5px;\nwidth: 9px;\nheight: 16px;\nmargin-top: -8px;\nfont: 16px fontawesome;\ncolor: rgb(31, 31, 31);\nfont-weight: bolder;\ncontent: \"\\002B\";\ntransition: all 0.3s ease;\n}\ntable.fold-table > tbody > tr.view:nth-child(4n-1) {\nbackground: #eee;\n}\ntable.fold-table > tbody > tr.view:hover {\nbackground: rgb(152, 231, 255) /*hover color */\n}\ntable.fold-table > tbody > tr.view.open {\nbackground: #FF8A00;\ncolor: white;\n}\ntable.fold-table > tbody > tr.view.open td:first-child:before, table.fold-table > tbody > tr.view.open th:first-child:before {\ntransform: rotate(-180deg);\ncontent: \"\\2212\";\ncolor: rgb(51, 51, 51);\n}\ntable.fold-table > tbody > tr.fold {\ndisplay: none;\n}\ntable.fold-table > tbody > tr.fold.open {\ndisplay: table-row;\n}\n.fold-content {\npadding: 0.5em;\n}\n.fold-content h3 {\nmargin-top: 0;\n}\n.fold-content > table {\nborder: 2px solid #ccc;\n}\n.fold-content > table > tbody tr:nth-child(even) {\nbackground: #eee;\n}\n\n/*-----------------------------------------------------------------------------------------------------------*/\n    " }} />
        </p>
                  <div id="stats" style={{fontSize: '20px', fontFamily: 'Arial, sans-serif', marginTop: '25px', marginBottom: '10px', marginLeft: '60px'}}>
                    <strong>Apply for Tenders</strong>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-3" style={{marginLeft: '60px'}}>
                      <a href="applyt.html" className="btn btn-grad btn-primary"><strong>View Results</strong></a>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    <div className="col-sm-2 abc" style={{float: 'right', marginRight: '0px'}}>
                      <a href="../index.html" className="btn btn-grad btn-primary"><strong> BACK TO HOME </strong></a>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br /><br />
                  <div>
                    <table className="fold-table ">
                      <thead>
                        <tr>
                          <th style={{textAlign: 'center'}}>Tender ID</th>
                          <th style={{width: '200px', padding: '40px'}}>TENDER NAME</th>
                          <th style={{width: '120px'}}>Duration</th>
                          <th>TENDER AMOUNT</th>
                          <th>Last Date</th>
                          <th>Apply</th>
                        </tr>
                      </thead>
                      <tbody>
                      
                      
                    
                        
                        <tr className="view">
                          <td><p id="tenid">200</p></td>
                          <td><strong>Computers</strong></td>
                          <td>2 Months</td>
                          <td>5000000</td>
                          <td>3 May 2023</td>
                          <td style={{textAlign: 'center'}} ><a href="#ex1" class="btn btn-primary" id="tbut" rel="modal:open"><strong>APPLY</strong></a> </td>
                        </tr>
                        
                    

                      
                   
                   
                       <tr className="fold">
                          <td colSpan={4} >
                            <div className={`fold ${expand}`}>
                              <h3>Company and Description</h3>
                              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>     
                            </div>
                          </td>
                        </tr>
            
      
                        
                        <tr className="view">
                          <td><p id="tenid">340</p></td>
                          <td><strong>Computers</strong></td>
                          <td>1 Month</td>
                          <td>200000</td>
                          <td>2 May 2023</td>
                          <td style={{textAlign: 'center'}} ><a href="#ex1" class="btn btn-primary" id="tbut" rel="modal:open"><strong>APPLY</strong></a> </td>
                        </tr>

                        <tr className="fold">
                          <td colSpan={4}>
                            <div className="fold-content">
                              <h3>Company and Description</h3>
                              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>     
                            </div>
                          </td>
                        </tr>
                        <tr className="view">
                          <td><p id="tenid">542</p></td>
                          <td><strong>Furnitures</strong></td>
                          <td>4 Months</td>
                          <td>8000000</td>
                          <td>1 May 2023</td>
                          <td style={{textAlign: 'center'}} ><a href="#ex1" class="btn btn-primary" id="tbut" rel="modal:open"><strong>APPLY</strong></a> </td>
                        </tr>
                        <tr className="fold">
                          <td colSpan={4}>
                            <div className="fold-content">
                              <h3>Company and Description</h3>
                              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>     
                            </div>
                          </td>
                        </tr>
                           
                        <tr className="view">
                          <td><p id="tenid">200</p></td>
                          <td><strong>Furnitures</strong></td>
                          <td>3 Months</td>
                          <td>9000000</td>
                          <td>3 May 2023</td>
                          <td style={{textAlign: 'center'}} ><a href="#ex1" class="btn btn-primary" id="tbut" rel="modal:open"><strong>APPLY</strong></a> </td>
                        </tr>
                        
                      </tbody>
                    </table> 
                  </div>
                  <br /><br />
                  <div className="row">
                    <div className="column col-sm-4 col-md-4 col-lg-4 ">
                    </div>
                    <div className="column col-sm-4 col-md-4 col-lg-4 ">      
                      <a href="#" className="previous">« Previous</a>
                      <span style={{border: '#FF8A00', borderStyle: 'solid', padding: '7px', borderWidth: 'thin'}}>1-50 of 200 Companies</span>
                      <a href="#" className="next">Next »</a>
                    </div>
                    <div className="column col-sm-4 col-md-4 col-lg-4 ">
                    </div>
                  </div>
                </div>
          
     
      

);
};
export default Tender;