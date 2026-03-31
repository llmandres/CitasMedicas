import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.patient.findMany();
  }

  async create(data: { patientName: string; date: Date }) {
    return this.prisma.patient.create({
      data,
    });
  }
}
