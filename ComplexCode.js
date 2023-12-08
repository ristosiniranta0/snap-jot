/* 
   Filename: ComplexCode.js
   Purpose: Demonstrate complex JavaScript code with advanced concepts
   Content: A library for performing advanced mathematical operations and analysis 
*/

// ComplexNumber class represents a complex number
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(complex) {
        let sumReal = this.real + complex.real;
        let sumImaginary = this.imaginary + complex.imaginary;
        return new ComplexNumber(sumReal, sumImaginary);
    }

    subtract(complex) {
        let diffReal = this.real - complex.real;
        let diffImaginary = this.imaginary - complex.imaginary;
        return new ComplexNumber(diffReal, diffImaginary);
    }

    multiply(complex) {
        let productReal = (this.real * complex.real) - (this.imaginary * complex.imaginary);
        let productImaginary = (this.real * complex.imaginary) + (this.imaginary * complex.real);
        return new ComplexNumber(productReal, productImaginary);
    }

    divide(complex) {
        if (complex.real === 0 && complex.imaginary === 0) {
            throw new Error("Cannot divide by zero.");
        }

        let denominator = (complex.real * complex.real) + (complex.imaginary * complex.imaginary);
        let quotientReal = ((this.real * complex.real) + (this.imaginary * complex.imaginary)) / denominator;
        let quotientImaginary = ((this.imaginary * complex.real) - (this.real * complex.imaginary)) / denominator;
        return new ComplexNumber(quotientReal, quotientImaginary);
    }

    getMagnitude() {
        return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
    }

    getConjugate() {
        return new ComplexNumber(this.real, -this.imaginary);
    }
}

// StatisticalAnalysis class for performing various statistical calculations
class StatisticalAnalysis {
    constructor(data) {
        this.data = data;
    }

    getMean() {
        let sum = 0;
        for (let i = 0; i < this.data.length; i++) {
            sum += this.data[i];
        }
        return sum / this.data.length;
    }

    getMedian() {
        let sortedData = this.data.sort((a, b) => a - b);
        let middleIndex = Math.floor(this.data.length / 2);

        if (this.data.length % 2 === 0) {
            return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
        } else {
            return sortedData[middleIndex];
        }
    }

    getStandardDeviation() {
        let mean = this.getMean();
        let sumOfSquaredDeviations = 0;

        for (let i = 0; i < this.data.length; i++) {
            let deviation = this.data[i] - mean;
            sumOfSquaredDeviations += deviation * deviation;
        }

        return Math.sqrt(sumOfSquaredDeviations / this.data.length);
    }
}

// Usage example
let num1 = new ComplexNumber(3, -2);
let num2 = new ComplexNumber(4, 5);
let sum = num1.add(num2);

console.log("Sum: " + sum.real + " + " + sum.imaginary + "i");

let data = [5, 2, 7, 3, 9, 10, 4];
let analysis = new StatisticalAnalysis(data);

console.log("Mean: " + analysis.getMean());
console.log("Median: " + analysis.getMedian());
console.log("Standard Deviation: " + analysis.getStandardDeviation());

// ... (more code)

// Total lines: 82 (without comments)