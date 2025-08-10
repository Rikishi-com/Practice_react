type ProjectProps = {
    projectName: string;
    projectSubName: string;
    detail: string;
    slideName: string;
    slide: string;
    siteName: string;
    site: string;
    result: string;
}

const ProjectCard = ({projectName, projectSubName, detail, slideName, slide, siteName, site, result}: ProjectProps)=>{
    return (
    <div>
    <h2>{projectName}</h2>
    <h3>{projectSubName}</h3>
    <p>{detail}</p>
    <p><a href={slide}>{slideName}</a></p>
    <p><a href={site}>{siteName}</a></p>
    <p>結果：{result}</p>
    </div>
    )
}

export default ProjectCard;