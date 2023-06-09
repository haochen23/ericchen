import Image from "next/image"
import AzureAdministrator from "../../public/images/certs/azure-administrator.png"
import CybersecurityArchitect from "../../public/images/certs/cybersecurity-architect.png"
import DevopsEngineer from "../../public/images/certs/devops-expert.png"
import IamAdministrator from "../../public/images/certs/identity-and-access-administrator.png"
import IstioExpert from "../../public/images/certs/istio.png"
import NetworkEngineer from "../../public/images/certs/network-engineer.png"
import SecurityEngineer from "../../public/images/certs/security-engineer.png"
import SecurityOperationsAnalyst from "../../public/images/certs/security-operations-analyst.png"
import SolutionArchitect from "../../public/images/certs/solution-architect.png"
import TerraformAssociate from "../../public/images/certs/terraform.png"

export const SolutionArchitectImage = ({ className, ...rest }) => (
  <Image
    src={SolutionArchitect}
    alt="Cloud Solution Architect Expert"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const DevopsEngineerImage = ({ className, ...rest }) => (
  <Image
    src={DevopsEngineer}
    alt="DevOps Engineer Expert"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const CybersecurityArchitectImage = ({ className, ...rest }) => (
  <Image
    src={CybersecurityArchitect}
    alt="CyberSecurity  Architect Expert"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const AzureAdministratorImage = ({ className, ...rest }) => (
  <Image
    src={AzureAdministrator}
    alt="Azure Administrator"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const IstioExpertImage = ({ className, ...rest }) => (
  <Image
    src={IstioExpert}
    alt="Istio Expert"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const IamAdministratorImage = ({ className, ...rest }) => (
  <Image
    src={IamAdministrator}
    alt="Identity and Access Administrator"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const NetworkEngineerImage = ({ className, ...rest }) => (
  <Image
    src={NetworkEngineer}
    alt="Network Engineer Associate"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const SecurityEngineerImage = ({ className, ...rest }) => (
  <Image
    src={SecurityEngineer}
    alt="Security Engineer Associate"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const SecurityOperationsAnalystImage = ({ className, ...rest }) => (
  <Image
    src={SecurityOperationsAnalyst}
    alt="Security Operations Analyst Associate"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)

export const TerraformAssociateImage = ({ className, ...rest }) => (
  <Image
    src={TerraformAssociate}
    alt="Terraform Associate"
    width={600}
    height={600}
    className={`w-full h-auto ${className}`}
    {...rest}
  />
)
