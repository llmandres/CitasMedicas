import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.appointment.findMany();
  }

  async create(data: { patientName: string; date: Date }) {
    return this.prisma.appointment.create({
      data,
    });
  }
}
