import { request } from 'express';
import React from 'react';
import supertest from 'supertest';
import index from './index';

const express = require("express");
const request = require("supertest");

const app = express();

app.use(express.json());


describe('Get /seduledCourse', () => {

    describe('Given a course detail', () => {

        test('should respond with a 200 status code', async () => {
            const response = await request(index).post("/shedulling").send({
                academic_year: "2020/2021",
                semester: 6

            })
            expect(response.send).toBe(results)
          
        })
        
        
    });
      
});