package com.example.ccms2;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.CardView;
import android.view.View;
import android.widget.Toast;

public class DashboardActivity extends AppCompatActivity {

    CardView reportCardView, historyCardView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        reportCardView = findViewById(R.id.cv_report);
        historyCardView = findViewById(R.id.cv_history);

        reportCardView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(DashboardActivity.this, ReportActivity.class);
                startActivity(i);
            }
        });

        historyCardView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(DashboardActivity.this, HistoryActivity.class);
                startActivity(i);
            }
        });

        findViewById(R.id.iv_logout).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(DashboardActivity.this, RegisterActivity.class));
                finishAffinity();
                Toast.makeText(DashboardActivity.this, "Logout Successful", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
