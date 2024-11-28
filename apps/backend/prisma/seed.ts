/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { events } from 'core';

async function seed() {
    const prisma = new PrismaClient();

    const transactions = events.map(async (event) => {
        await prisma.event.create({
            data: {
                id: event.id,
                identifier: event.identifier,
                password: event.password,
                name: event.name,
                date: event.date,
                local: event.local,
                description: event.description,
                image: event.image,
                backgroundImage: event.backgroundImage,
                expectedAudience: event.expectedAudience,
                guest: {
                    create: event.guests.map((guest) => ({
                        id: guest.id,
                        name: guest.name,
                        email: guest.email,
                        confirmed: guest.confirmed,
                        hasCompanion: guest.hasCompanion,
                        numberOfCompanions: guest.numberOfCompanions
                    }))
                }
            }
        })
    });

    await Promise.all(transactions);
}

seed();
