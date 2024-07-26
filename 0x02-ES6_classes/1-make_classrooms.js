import Classroom from './Classroom';

export default function makeClassrooms(classrooms) {
    const rooms = [new classrooms(19), new classrooms(20), new classrooms(34)];
    return rooms;
}