import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent implements OnInit {
  
  ProfileForm!:FormGroup;
  contactInfo!: FormGroup;
  educationBackground!:FormGroup;
  selectedFiles: File[] = [];


  
  constructor (private formBuilder:FormBuilder){}
  ngOnInit(): void {
      this.ProfileForm= this.formBuilder.group({
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        gender: ['',Validators.required],
        dob: ['',Validators.required],
        nationalIdNo: ['',Validators.required],
        religion: ['',Validators.required],
        maritalStatus: ['',Validators.required]
        
      })
      this.contactInfo=this.formBuilder.group({
        PrimaryPhoneno:['',Validators.required],
        SecondaryPhoneno:[''],
        emailAdress:['',Validators.required],
        SocialMedia:['',Validators.required],
      })
this.educationBackground=this.formBuilder.group({
  highestLevelofEducationAttained:['',Validators.required],
  nameofInstitution:['',Validators.required],
  locationofInstitution:['',Validators.required],
   startDate: ['', Validators.required], // Assign startDate property
      endDate: ['', Validators.required] ,     // Assign endDate property
      dateRange:['',Validators.required]


})
  }
 



  onFilesSelected(event: any) {
    const files: FileList = event.target.files;
    this.selectedFiles = [];
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);
    }
  }
  
  uploadFiles() {
    // Here, you would handle the upload of the selected files
    // You can use this.selectedFiles to access the selected files
    console.log("Upload logic goes here");
  }
  
  downloadFile() {
    // Assuming you have the file URL or content available
    const fileContent = 'Sample file content'; // Replace with actual file content or URL
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file.txt'; // Replace with desired file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
  }
  submit() {
    // Handle submission logic here
    console.log('Form submitted!');
  }

}
