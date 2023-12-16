function calculateNetSalary (salary, benefits){
    //list paye, nhif and nssf deductions

    //calculate paye
    const calculatePaye = (monthlyPay) => {
        if (monthlyPay >= 0 && monthlyPay <= 24000){
            return monthlyPay * 0.10; 
        } 

        else if (monthlyPay >= 24001 && monthlyPay <= 32333){
            return monthlyPay * 0.25;
        }
        else if (monthlyPay >= 32334 && monthlyPay <= 500000){
            return monthlyPay * 0.30; 
        }
        else if (monthlyPay >= 500001 && monthlyPay <= 800000){
            return monthlyPay * 0.325;
        }
        else if (monthlyPay > 800000){
            return monthlyPay * 0.35;
        }
        else {return 0; // Default to 0 for invalid input
        }
    }

    //calculate nhif

    const calculateNhif = (monthlyPay) => {
        return monthlyPay * 0.0275;
    }

    //calculate nssfRate

    const calculateNssf = (monthlyPay) => {
        if (monthlyPay > 0 && monthlyPay <= 6000 ){
            return monthlyPay * 0.12 
        }
            
        else if (monthlyPay >= 6001 && monthlyPay <= 18000){
            return monthlyPay * 0.12
        }

        else {return 0; // default to 0 for invalid input }
        };
    }

    //calculating gross salary//

    const grossSalary = salary + benefits;

    //calculating paye, nhif and  nssf  deductions

    const payeDeduction = calculatePaye(grossSalary);
    const nhifDeduction = calculateNhif(grossSalary);
    const nssfDeduction = calculateNssf(grossSalary);

    //calculate net salary

    const netSalary = grossSalary - (payeDeduction + nhifDeduction + nssfDeduction);

    return {
        GROSS_Salary: grossSalary,
        NET_Salary: netSalary,
        PAYE_Deduction: payeDeduction,
        NHIF_Deduction: nhifDeduction,
        NSSF_Deduction: nssfDeduction
    };

}
//example
console.log(calculateNetSalary(100000, 50000));