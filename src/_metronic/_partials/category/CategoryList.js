
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers/index";

export function CategoryList({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
         Category Lists
          </span>
       
<br/>
<div>
          <form className="form form-label-left">
            <div className="form-group row">
              <div className="row-lg-2">
               
                <label >
                  <b>Show:</b> 
                </label>
                <input type="number"/>
                <label><b>entries</b></label>
              </div>
            
            </div>

          </form>
          </div>
          </h3>
      
         

        <div className="card-toolbar">
       
           <label><b>Search: </b>
                  <input type="search" placeholder="" aria-controls="DataTables_Table_0" />
                  </label>
        </div>  
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-0">
        {/* begin::Table */}
        <div className="table-responsive">
          <table
            className="table table-head-custom table-vertical-center"
            id="kt_advance_table_widget_1"
          >
            <thead>
              <tr className="text-left">
                <th className="pl-0" style={{ width: "5px" }}>
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </th>
                <th className="pr-0" style={{ width: "50px" }}>
                  NO
                </th>
                <th style={{ minWidth: "150px" }}>NAME</th>
                <th style={{ minWidth: "300px" }}>DESCRIPTION</th>
                <th style={{ minWidth: "100px" }}>MOVIE</th>
                <th className="pr-0 text-right" style={{ minWidth: "100px" }}>
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>

              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>1</span>
                  </div>
                </td>
               
                <td className="pr-0">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  Drama
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  20
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>


        
              <tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="2" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span>2</span>
  </div>
</td>

<td className="pr-0">
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  Thriller
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  lorem ipsum dolor sit amet consectetur adisping...
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  10
  </span>
</td>

<td className="pr-0 text-right">
<a href="#"
    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-warning">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a href="#"
    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-success">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-danger btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-danger">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>
<tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="3" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span>3</span>
  </div>
</td>

<td className="pr-0">
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  Action
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  lorem ipsum dolor sit amet consectetur adisping...
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  40
  </span>
</td>

<td className="pr-0 text-right">
<a href="#"
    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-warning">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a href="#"
    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-success">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-danger btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-danger">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>

<tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="4" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span>4</span>
  </div>
</td>

<td className="pr-0">
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  Thriller
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  lorem ipsum dolor sit amet consectetur adisping...
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  40
  </span>
</td>

<td className="pr-0 text-right">
<a href="#"
    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-warning">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a href="#"
    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-success">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-danger btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-danger">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>

<tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="5" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span>5</span>
  </div>
</td>

<td className="pr-0">
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  Horror
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  lorem ipsum dolor sit amet consectetur adisping...
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  45
  </span>
</td>

<td className="pr-0 text-right">
<a href="#"
    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-warning">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a href="#"
    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-success">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-danger btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-danger">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>

<tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="6" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span>6</span>
  </div>
</td>

<td className="pr-0">
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  Action
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  lorem ipsum dolor sit amet consectetur adisping...
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  50
  </span>
</td>

<td className="pr-0 text-right">
<a href="#"
    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-warning">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a href="#"
    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-success">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-danger btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-danger">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>

<tr>

<td className="pl-0">
  <label className="checkbox checkbox-lg checkbox-single">
    <input type="checkbox" value="7" />
    <span></span>
  </label>
</td>

<td className="pr-0">
  <div className="symbol symbol-50 symbol-light mt-1">
    <span>7</span>
  </div>
</td>

<td className="pr-0">
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  Horror
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  lorem ipsum dolor sit amet consectetur adisping...
  </span>
</td>
<td>
  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
  65
  </span>
</td>

<td className="pr-0 text-right">
<a href="#"
    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-warning">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a href="#"
    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
  >
    <span className="svg-icon svg-icon-md svg-icon-success">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/Communication/Write.svg"
        )}
      ></SVG>
    </span>
  </a>
  <a
    href="#"
    className="btn btn-icon btn-light btn-hover-danger btn-sm"
  >
    <span className="svg-icon svg-icon-md svg-icon-danger">
      <SVG
        src={toAbsoluteUrl(
          "/media/svg/icons/General/Trash.svg"
        )}
      ></SVG>
    </span>
  </a>
</td>
</tr>
<tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="8" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>8</span>
                  </div>
                </td>
               
                <td className="pr-0">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  Drama
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  30
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="9" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>9</span>
                  </div>
                </td>
               
                <td className="pr-0">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  Action
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  70
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>

                <td className="pl-0">
                  <label className="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="10" />
                    <span></span>
                  </label>
                </td>

                <td className="pr-0">
                  <div className="symbol symbol-50 symbol-light mt-1">
                    <span>10</span>
                  </div>
                </td>
               
                <td className="pr-0">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  Drama
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  lorem ipsum dolor sit amet consectetur adisping...
                  </span>
                </td>
                <td>
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                  80
                  </span>
                </td>

                <td className="pr-0 text-right">
                <a href="#"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#"
                    className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light btn-hover-danger btn-sm"
                  >
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>             
            </tbody>
          </table>
        </div>
        {/* end::Table */}
      </div>
      {/* end::Body */}
    </div>
  );
}
