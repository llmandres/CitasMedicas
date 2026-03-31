import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('api/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  getAllAppointments() {
    return this.appointmentsService.findAll();
  }

  // Controler de Citas
