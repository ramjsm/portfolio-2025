import { VideoDialog } from "../../../components/VideoDialog"
import { WebGLImageWrapper } from "../../../components/WebGLImageWrapper"
import { WebGLVideoWrapper } from "../../../components/WebGLVideoWrapper"

export function AsBelowSoAbove() {
    return (
        <div className="flex flex-col gap-20 mt-20">
            <div className="flex flex-col w-[80%] mx-auto gap-2">
                <div className="relative">
                    <WebGLVideoWrapper src="/projects/as-below-so-above/as-below-so-above-live-cam.webm" thresholdWhite={0.13} thresholdGray={0.13} noise={1.25} />
                    <div className="absolute bottom-5 left-5 z-10">
                        <VideoDialog src="https://vimeo.com/1014313543" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1">
                        <WebGLImageWrapper src="/projects/as-below-so-above/video-mapping.webp" thresholdWhite={0.6} thresholdGray={0.4} noise={1.25} />
                    </div>
                    <div className="flex-1">
                        <div className="row-start-2 row-end-3 col-start-1 col-end-3">
                            <WebGLImageWrapper src="/projects/as-below-so-above/sculpture-top.webp" thresholdWhite={0.3} thresholdGray={0.3} noise={1.25} />
                        </div>  
                        
                    </div>
                </div>
                <div className="row-start-2 row-end-3 col-start-1 col-end-3">
                    <WebGLImageWrapper src="/projects/as-below-so-above/wall-people.webp" thresholdWhite={0.5} thresholdGray={0.4} noise={1.25} />
                </div>
                <div className="flex gap-2">
                    <div className="flex-1">
                        <WebGLImageWrapper src="/projects/as-below-so-above/sculpture.webp" thresholdWhite={0.5} thresholdGray={0.5} noise={1.25} />
                    </div>
                    <div className="flex-1">
                        <div className="row-start-2 row-end-3 col-start-1 col-end-3">
                            <WebGLImageWrapper src="/projects/as-below-so-above/paintings.webp" thresholdWhite={0.35} thresholdGray={0.35} noise={1.25} />
                        </div>  
                        
                    </div>
                </div>
                <div className="row-start-2 row-end-3 col-start-1 col-end-3">
                    <WebGLImageWrapper src="/projects/as-below-so-above/after-performance.webp" thresholdWhite={0.5} thresholdGray={0.4} noise={1.25} />
                </div>
            </div>
        </div>
    )
}