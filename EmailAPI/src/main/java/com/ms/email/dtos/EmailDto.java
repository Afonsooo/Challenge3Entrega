package com.ms.email.dtos;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class EmailDto {

    @NotBlank
    public String ownerRef;
    @NotBlank
    @Email
    public String emailFrom;
    @NotBlank
    @Email
    public String emailTo;
    @NotBlank
    public String subject;
    @NotBlank
    public String text;

}
