import React from "react"
import {
  AzureAdministratorImage,
  CybersecurityArchitectImage,
  DevopsEngineerImage,
  IamAdministratorImage,
  IstioExpertImage,
  NetworkEngineerImage,
  SecurityEngineerImage,
  SecurityOperationsAnalystImage,
  SolutionArchitectImage,
  TerraformAssociateImage
} from "./CertImages"

const CertBadges = () => {
  return (
    <>
      <div
        className="absolute right-4 bottom-4
flex items-center justify-center overflow-hidden md:relative md:pt-2 md:bottom-auto md:flex-wrap

"
      >
        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <SolutionArchitectImage className="" />
        </div>

        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <DevopsEngineerImage className="" />
        </div>

        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <CybersecurityArchitectImage className="" />
        </div>

        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <IstioExpertImage className="" />
        </div>
        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <AzureAdministratorImage className="" />
        </div>

        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <SecurityEngineerImage className="" />
        </div>
        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <SecurityOperationsAnalystImage className="" />
        </div>
        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <IamAdministratorImage className="" />
        </div>
        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <NetworkEngineerImage className="" />
        </div>
        <div className="w-32 h-auto flex items-center justify-center relative md:w-24 sm:w-16">
          <TerraformAssociateImage className="" />
        </div>
      </div>
    </>
  )
}

export default CertBadges
