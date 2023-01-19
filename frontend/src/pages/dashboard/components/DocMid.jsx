import React from "react";
import Sidebar from "../../../components/Sidebar";
import AddDocMid from "../../../components/addDocMid";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function DocMids() {
  const documentType = [
    {
      name: "Middleware",
      icon: <DocumentTextIcon />,
      path: "/dashboard/doc/mid/add",
    },
    {
      name: "API Jenkins",
      icon: <DocumentTextIcon />,
      path: "/dashboard/doc/api/add",
    },
    {
      name: "Iloan Consumer",
      icon: <DocumentTextIcon />,
      path: "/dashboard/doc/iloan/add",
    },
  ];
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full p-4">
        <Header />
        {/* Page Header */}
        <div className="flex mt-5 w-full bg-slate-800 p-5 rounded-xl text-slate-200">
          <p className="flex">
            <Link to="/dashboard" className="hover:text-white">
              <span className="mx-1"> Dashboard </span>
            </Link>
            /
            <Link to="/dashboard/doc" className="hover:text-white">
              <span className="flex flex-row mx-1 gap-1 items-center">
                <DocumentTextIcon className="w-5 h-5" /> Document Middleware
              </span>
            </Link>
            <Link to="/dashboard/doc/mid/add">
              <span className="hover:text-white">
                / <b>Generate</b>
              </span>
            </Link>
          </p>
        </div>
        <div className="pt-5 text-white font-bold">Document Type</div>
        <div className="flex mt-5 p-2 bg-slate-800 rounded-xl sm:flex-row flex-col gap-5 sm:w-full w-48 sm:justify-start justify-center">
          {documentType.map((val, index) => {
            return (
              <Link
                key={index}
                className="flex flex-row outline outline-1 outline-slate-700 hover:bg-slate-700 rounded-lg py-1 text-white"
                Link
                to={val.path}>
                <div className="flex flex-row gap-2 px-5  items-center">
                  <div className="w-5">{val.icon}</div>
                  <div>{val.name}</div>
                </div>
                <div className="divider divider-vertical divide-rose-400"></div>
              </Link>
            );
          })}
        </div>
        <div className="divider sm:px-20 px-32 py-0" />
        <AddDocMid />
      </div>
    </div>
  );
}
