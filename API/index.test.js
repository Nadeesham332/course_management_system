import { request } from 'express';
import React from 'react';
import supertest from 'supertest';
import index from './index';

const express = require("express");
const request = require("supertest");

const app = express();

app.use(express.json());


describe('Get /courses', () => {

    describe('Given a course detail', () => {

        test('should respond with a 200 status code', async () => {
            const response = await request(index).post("/courses").send({
                course_code: "EC4060",
                parent_course: "NULL",
                title:"Computer and Data Networks",
                state:1 ,
                core_elective: 1,
                credits: 3
            })
            expect(response.send).toBe("list of all courses -> under developing")
          
        })
        
        
    });
      
});
