import { WorkExperienceModel}  from '../models/WorkExperienceModel';

export class JobSeekerProfileModel{
    id: number;
    headLine: string;
    profileSummary: string;
    userId: number;
    keySkills: string;
    gender: string;
    permanentAddress: number;
    currentAddress: string;
    workExperience: Array<WorkExperienceModel>;
}