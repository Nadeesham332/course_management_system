import { request } from 'express';
import React from 'react';
import supertest from 'supertest';
import index from './index';

const express = require("express");
const request = require("supertest");

const app = express();

app.use(express.json());


describe('Get /insertsyllabusoutline', () => {

    describe('Check syllabus outline', () => {

        test('should respond with a 200 status code', async () => {
            const response = await request(index).post("/syllabus_outline").send({
                course_code: "EC4060"
            })
            expect(response.send).toBe(result)
          
        })
        
        
    });
      
});