package birds

import (
	"testing"
)

var emptyArray = []int{}
var zeroValue = []int{0}
var negativeValue = []int{-1}
var birdSightings1 = []int{1, 1, 2, 2, 3}
var birdSightings2 = []int{1, 1, 2, 3, 2}
var birdSightings3 = []int{4, 1, 2, 2, 5}
var birdSightings4 = []int{4, 1, 2, 2, 5, 6, 2}
var birdSightings5 = []int{4, 1, 2, 2, 5, 6, 2, 1, 1}
var birdSightings6 = []int{2, 2, 1, 1, 3}

func TestGetMostFrequentSighting(t *testing.T) {

	type args struct {
		birds []int
	}
	tests := map[string]struct {
		args       args
		want       int
		wantErr    bool
		wantErrStr string
	}{
		"empty array should throw an error": {
			args{
				birds: emptyArray,
			},
			-1,
			true,
			"insert a non-empty array",
		},
		"zero value should throw an error": {
			args{
				birds: zeroValue,
			},
			-1,
			true,
			"bird type ids must be >= 1",
		},
		"negative value should throw an error": {
			args{
				birds: negativeValue,
			},
			-1,
			true,
			"bird type ids must be >= 1",
		},
		"array 1 should return 1": {
			args{
				birds: birdSightings1,
			},
			1,
			false,
			"",
		},
		"array 2 should return 1": {
			args{
				birds: birdSightings2,
			},
			1,
			false,
			"",
		},
		"array 3 should return 2": {
			args{
				birds: birdSightings3,
			},
			2,
			false,
			"",
		},
		"array 4 should return 2": {
			args{
				birds: birdSightings4,
			},
			2,
			false,
			"",
		},
		"array 5 should return 1": {
			args{
				birds: birdSightings5,
			},
			1,
			false,
			"",
		},
		"array 6 should return 1": {
			args{
				birds: birdSightings6,
			},
			1,
			false,
			"",
		},
	}
	for name, tt := range tests {
		t.Run(name, func(t *testing.T) {
			got, err := GetMostFrequentSighting(tt.args.birds)
			if err != nil {
				if !tt.wantErr {
					t.Errorf("GetMostFrequentSighting() error = %v, wantErr %v", err, tt.wantErr)
					return
				}

				if err.Error() != tt.wantErrStr {
					t.Errorf("GetMostFrequentSighting() error string = %v, wantErrStr %v", err.Error(), tt.wantErrStr)
					return
				}
			} else {
				if tt.wantErr {
					t.Errorf("GetMostFrequentSighting() error = %v, wantErr %v", err, tt.wantErr)
					return
				}
			}

			if got != tt.want {
				t.Errorf("GetMostFrequentSighting() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestGetLatestFirstSighting(t *testing.T) {
	type args struct {
		birds []int
	}
	tests := map[string]struct {
		args       args
		want       int
		wantErr    bool
		wantErrStr string
	}{
		// TODO: Add test cases.
		"empty array should throw an error": {
			args{
				birds: emptyArray,
			},
			-1,
			true,
			"insert a non-empty array",
		},
		"zero value should throw an error": {
			args{
				birds: zeroValue,
			},
			-1,
			true,
			"bird type ids must be >= 1",
		},
		"negative value should throw an error": {
			args{
				birds: negativeValue,
			},
			-1,
			true,
			"bird type ids must be >= 1",
		},
		"array 1 should return 3": {
			args{
				birds: birdSightings1,
			},
			3,
			false,
			"",
		},
		"array 2 should return 3": {
			args{
				birds: birdSightings2,
			},
			3,
			false,
			"",
		},
		"array 3 should return 5": {
			args{
				birds: birdSightings3,
			},
			5,
			false,
			"",
		},
		"array 4 should return 6": {
			args{
				birds: birdSightings4,
			},
			6,
			false,
			"",
		},
		"array 5 should return 6": {
			args{
				birds: birdSightings5,
			},
			6,
			false,
			"",
		},
		"array 6 should return 3": {
			args{
				birds: birdSightings6,
			},
			3,
			false,
			"",
		},
	}
	for name, tt := range tests {
		t.Run(name, func(t *testing.T) {
			got, err := GetLatestFirstSighting(tt.args.birds)
			if (err != nil) != tt.wantErr {
				t.Errorf("GetLatestFirstSighting() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if err != nil {
				if err.Error() != tt.wantErrStr {
					t.Errorf("GetLatestFirstSighting() error string = %v, wantErrStr %v", err.Error(), tt.wantErrStr)
					return
				}
			}
			if got != tt.want {
				t.Errorf("GetLatestFirstSighting() = %v, want %v", got, tt.want)
			}
		})
	}
}
