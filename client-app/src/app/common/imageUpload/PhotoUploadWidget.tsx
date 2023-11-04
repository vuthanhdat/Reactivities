import { Button, Grid, Header } from "semantic-ui-react";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";
import { useEffect, useState } from "react";
import PhototWidgetCropper from "./PhotoWidgetCropper";

interface Props {
    loading: boolean;
    uploadPhoto: (file:any) => void;
}

export default function PhotoUploadWidget({loading, uploadPhoto}: Props) {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop(){
        if (cropper) {
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob));
        }
    }

    useEffect(() => {
        return () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        }
    }, [files]);

    return (
        <Grid>
            <Grid.Column width={4}>
                <Header sub color="teal" content="Step 1 - Add photo" />
                <PhotoWidgetDropzone setFiles={setFiles} />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color="teal" content="Step 2 - Resize photo" />
                {
                    files && files.length > 0 && (
                        <PhototWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
                    )
                }
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color="teal" content="Step 3 - Preview & Upload" />
                {files && files.length > 0 && (
                <>
                    <div className="img-preview" style={{minHeight:200, overflow:"hidden"}}></div>
                    <Button.Group widths={2}>
                        <Button loading={loading} onClick={onCrop} positive icon="check"  />
                        <Button onClick={() => setFiles([])} icon="close"  />
                    </Button.Group>
                </>)}
                
            </Grid.Column>
        </Grid>
    )
}