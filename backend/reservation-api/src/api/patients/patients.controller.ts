import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('api/patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  getAllPatients() {
    return this.patientsService.findAll();
  }
  @Post()
  createPatient(@Body() body: { patientName: string; date: Date }) {
    return this.patientsService.create({
      patientName: body.patientName,
      date: new Date(body.date),
    });
  }
}
